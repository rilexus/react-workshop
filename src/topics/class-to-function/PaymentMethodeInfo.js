import React, {Component, Fragment} from "react";

const hash = {
  numericObjectHash(){
    return 42
  }
}

const client = {
  async postRequest(...args){}
}

const dummyComponent = ({children}) => <div>{children}</div>

const FormattedMessage = dummyComponent
const Alert = dummyComponent
const Iframe = dummyComponent
const Box = dummyComponent
const PaymentMethodInner = dummyComponent
const InvoiceForm = dummyComponent

class PaymentMethodInfo extends Component {
  state = {
    checkoutData: undefined,
    checkoutDataLoading: false,
    ccHash: 0,
  }

  isAddressComplete = address => {
    return (
      !!address &&
      !!address.firstName &&
      !!address.lastName &&
      !!address.streetName &&
      !!address.streetNumber &&
      !!address.postalCode
    )
  }

  isDataValid = () => {
    const { ccHash, checkoutData, checkoutDataLoading } = this.state
    const { billingAddress } = this.props

    return ccHash === hash.numericObjectHash(billingAddress) && !!checkoutData && !checkoutDataLoading
  }

  loadIFrameCheckoutData = () => {
    const { billingAddress, payment, email } = this.props
    const { checkoutDataLoading } = this.state

    if (!this.isAddressComplete(billingAddress)) {
      return
    }

    const ccHash = hash.numericObjectHash(billingAddress)

    if (checkoutDataLoading && ccHash === this.state.ccHash) {
      return
    }

    this.setState({
      checkoutDataLoading: true,
      ccHash,
    })

    const requestData = {
      email,
      billing: billingAddress,
      payment: {
        paymentProviderName: payment.provider,
        paymentMethodName: payment.id,
      },
    }

    client.postRequest('Prym.CartApi.Cart.checkoutPaymentData', requestData).then(({ checkoutData }) => {
      if (ccHash !== this.state.ccHash) {
        return // An old request that is no longer valid
      }

      this.setState({
        checkoutData,
        checkoutDataLoading: false,
      })
    })
  }

  onChange = (paymentProvider, data) => {
    const { onChange } = this.props

    if (onChange) {
      onChange({ [paymentProvider.methodName]: data })
    }
  }

  renderError = message => {
    const labelError = <FormattedMessage id='cart.error' />

    return (
      <Alert type='danger'>
        <h2 className='c-alert__caption'>{labelError}</h2>
        <p>{message || labelError}</p>
      </Alert>
    )
  }

  renderMissingAddress = () => {
    const { labelMissingAddress } = this.props

    return this.renderError(labelMissingAddress)
  }

  renderLoading = () => {
    const { labelLoading } = this.props

    return (
      <Fragment>
        <div className='c-loader'>
          &nbsp;
          <br />
          &nbsp;
        </div>
        <Alert type='success'>
          <h2 className='c-alert__caption'>{labelLoading}</h2>
        </Alert>
      </Fragment>
    )
  }

  renderIframe = () => {
    if (!this.isAddressComplete(this.props.billingAddress)) {
      return this.renderMissingAddress()
    }

    if (!this.isDataValid()) {
      this.loadIFrameCheckoutData()

      return this.renderLoading()
    }

    const { iFrameUrl } = this.state.checkoutData

    if (!iFrameUrl) {
      return this.renderError()
    }

    return <Iframe id='paymentIframe' src={iFrameUrl} frameBorder='0' />
  }

  renderPaymentBox = (title, content) => {
    const selectedText = this.props.selected_text

    return (
      <Box destroyMobile={false} className='c-checkout__payment-info c-box--sm'>
        <PaymentMethodInner title={title} text={content} selected={selectedText} />
      </Box>
    )
  }

  renderCreditCard = () => {
    const title = this.props.card_title
    const content = this.renderIframe()

    return this.renderPaymentBox(title, content)
  }

  renderPaypal = () => {
    const title = this.props.paypal_title
    const content = this.props.paypal_text

    return this.renderPaymentBox(title, content)
  }

  renderSepa = () => {
    const title = this.props.sepa_title
    const content = this.props.sepa_text

    return this.renderPaymentBox(title, content)
  }

  renderSofort = () => {
    const title = this.props.sofort_title
    const content = this.props.sofort_text

    return this.renderPaymentBox(title, content)
  }

  renderInvoice = () => {
    const { paymentProviderMap, checkoutUnlock, onValidationFailed } = this.props
    const onChange = data => {
      this.onChange(paymentProviderMap.invoice, data)
    }

    const form = (
      <InvoiceForm checkoutUnlock={checkoutUnlock} onValidationFailed={onValidationFailed} onChange={onChange}>
        <div>{this.props.invoice_text}</div>
      </InvoiceForm>
    )

    return this.renderPaymentBox(this.props.invoice_title, form)
  }

  render() {
    const { payment, paymentProviderMap } = this.props

    switch (payment.id) {
      case paymentProviderMap.card.methodName:
        return (
          <Fragment>
            {this.props.hasCreditCartValidationFails &&
            this.renderError(<FormattedMessage id='checkout.creditCartValidation' />)}
            {this.renderCreditCard()}
          </Fragment>
        )
      case paymentProviderMap.paypal.methodName:
        return this.renderPaypal()
      case paymentProviderMap.sepa.methodName:
        return this.renderSepa()
      case paymentProviderMap.sofort.methodName:
        return this.renderSofort()
      case paymentProviderMap.invoice.methodName:
        return this.renderInvoice()
      default:
        break
    }

    return null
  }
}