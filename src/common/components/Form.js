import styled from 'styled-components'
import React from 'react'

export const Label = styled.label`
  font-weight: 700;
  margin-bottom: 4px;
`

const BaseInput = styled.input`
  width: 100%;
  border-radius: 3px;
  border: 1px solid #cdd2d4;
  background-color: #e2e4e6;
  padding: 7px;
  outline: none;
  margin-bottom: 12px;

  -webkit-transition: background-color 0.4s; /* Safari */
  transition: background-color 0.4s;

  &:focus {
    background-color: white;
  }
`

export const Input = props => <BaseInput autoComplete="off" {...props} />
