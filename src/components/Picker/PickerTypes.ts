export type GestureProps = {
  pickerTranslateY: {
    value: number,
  },
  value: TPickerValue,
  maxValue: number,
  onValueChange: (value: TPickerValue) => void,
}

export type TPickerValue = { value: number; label: string };

export type PickerProps = {
  onValueChange: (value: TPickerValue) => void,
  value?: TPickerValue,
  values: TPickerValue[]
}
