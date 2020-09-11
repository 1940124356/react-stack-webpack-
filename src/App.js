import React from 'react'

//定义一个React根组件
export default class App extends React.component {
    //构造器
    constructor(props){
        super(props)
    }
    //生命周期
    render(){
        return(
            <div>
                <h1>hello React</h1>
            </div>
        )
    }
}