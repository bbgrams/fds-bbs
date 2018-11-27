// 로딩 인디케이터 띄워주기

import React from 'react'

export default function withLoading(WrappedComponent){
  // 컴퍼넌트를 인수로 받아서 컴퍼넌트를 반환한다 => 고차컴포넌트(hoc)
  return function WithLoading(props) {
    const {loading, ...rest} = props
    if(loading){
      return 'loading...'
    }else{
      return <WrappedComponent {...rest} />
    }
  }
}