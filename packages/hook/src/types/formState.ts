import type { FormValues } from './common';

type ChangeAction<TValues extends FormValues<any>> = {
  type: 'change';
  payload: Partial<TValues>;
};

type BlurAction<TValues extends FormValues<any>> = {
  type: 'blur';
  payload: { [K in keyof TValues]: boolean };
};

type ValidateAction<TValues extends FormValues<any>> = {
  type: 'validate';
  payload: { [K in keyof TValues]?: string };
};

type SubmitValidateAction<TValues extends FormValues<any>> = {
  type: 'submit_validate';
  payload: { [K in keyof TValues]?: string };
};

type ResetAction<TValues extends FormValues<any>> = {
  type: 'reset';
  payload: FormState<TValues>;
};

type SubmitAction = {
  type: 'submit';
};

type ResetValues<TValues extends FormValues<any>> = {
  type: 'reset_values';
  payload: TValues;
};

type ResetErrors = {
  type: 'reset_errors';
};

type ResetTouched = {
  type: 'reset_touched';
};

export type FormAction<TValues extends FormValues<any>> =
  | ChangeAction<TValues>
  | BlurAction<TValues>
  | ValidateAction<TValues>
  | SubmitValidateAction<TValues>
  | ResetAction<TValues>
  | SubmitAction
  | ResetValues<TValues>
  | ResetErrors
  | ResetTouched;

export type FormState<TValues extends FormValues<any>> = {
  values: TValues;
  touched: { [K in keyof TValues]?: boolean };
  errors: { [K in keyof TValues]?: string };
  submitted: boolean;
};
