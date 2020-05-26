import {useMinusTwo} from "./useMinusTwo";

function useNormalizedvalue(defaultValue) {
  const [value, setValue] = useMinusTwo(defaultValue)

  const handle = (val) => {
    setValue(val + 2)
  }

  return [value , handle()]

}