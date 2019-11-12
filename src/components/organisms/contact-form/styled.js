import styled from 'styled-components'
import { Field } from 'formik'

import vars from '@styles/variables'

import { Button } from '@atoms'

export const Label = styled.label`
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  color: ${vars['color-text']};
  font-size: 0.875rem;
  display: block;
`

export const StyledField = styled(Field)`
  border: ${({ error }) =>
    error ? `1px solid ${vars['color-danger']}` : `1px solid ${vars['color-border']}`};
  height: ${({ textarea }) => (textarea ? '8rem' : '3rem')};
  padding: 1rem;
  border-radius: 2px;
  width: 100%;
  display: block;
  font-size: 1rem;
  font-family: ${vars['font-text']};
  resize: vertical;
  outline: none;

  &:hover {
    border-color: ${vars['color-gray']};
  }

  &:focus {
    border-color: ${vars['color-primary']};
  }
`

export const Form = styled.form`
  display: block;
  width: 100%;
  margin-top: -1.5rem;
`

export const ErrorText = styled.p`
  font-size: 0.875rem;
  color: ${vars['color-danger']};
`

export const SubmitButton = styled(Button)`
  margin-top: 1.5rem;
`
