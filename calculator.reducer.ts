import { createReducer, on } from '@ngrx/store'
import * as CalculatorActions from '../action/caculator.action'
import { CalculatorState } from '../state/calculator.state'

const initialState: CalculatorState = {
  currentNum: '0',
  previousNum: '0',
  operator: '',
}

export const caculatorReducer = createReducer(
  initialState,
  on(CalculatorActions.enterNumber, (state, action) => {
    let newState: CalculatorState = { ...state }
    if (state.operator == '') {
      if (newState.currentNum == '0') {
        newState.currentNum = action.number;
      }
      else {
        newState.currentNum = state.currentNum + action.number;
      }
    }
    else{
      if(state.operator == '+'){
        newState.currentNum = (parseInt(newState.currentNum)  + parseInt(action.number)).toString()
      }
    }


    return newState
  }),
  on(CalculatorActions.enterOperator, (state, action) => {
    let newState: CalculatorState = { ...state }
    newState.operator = action.operator
    return newState
  })
)
