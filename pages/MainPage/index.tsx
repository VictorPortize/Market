import React, { useRef, useEffect, useState } from 'react'
import { PanGestureHandler, PanGestureHandlerStateChangeEvent, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler'
import { Animated } from 'react-native'

import { Container, halfScreenSize, ScreenSize } from './styles'
import ProductList from './components/ProductList'
import BottomSheet from './components/BottomSheet'

const MainPage : React.FC = () => {

    const translateY = useRef( new Animated.Value( ScreenSize ) ).current
    const [ openSheet, setOpenSheet ] = useState(false)

    function AnimatedEvent( { nativeEvent } : PanGestureHandlerGestureEvent ){

        translateY.setValue( nativeEvent.absoluteY )
    }

    function handleDismissModal(){
        setOpenSheet(false)
    }

    function handlerStateChange( { nativeEvent : { y } } : PanGestureHandlerStateChangeEvent){
        console.log('y',y)
        console.log('hf',halfScreenSize)
    }

    function handleCloseModal(){
        handleAnimateModal(true)
    }

    function handleResetModal(){
        handleAnimateModal(false)
    }

    function handleAnimateModal( bool : Boolean){
        Animated.timing(translateY,{
            toValue : bool ? ScreenSize : 0,
            useNativeDriver : true
        }).start()
    }

    return (
        <PanGestureHandler onGestureEvent={ AnimatedEvent } onHandlerStateChange={ handlerStateChange } >
            <Container>
                <ProductList />            
                {
                    openSheet && <BottomSheet handleCloseModal={handleCloseModal} handleResetModal={handleResetModal} dismissModal={handleDismissModal} visible={openSheet} translateY={ translateY }  />
                }
            </Container>
        </PanGestureHandler>
    )
}

export default MainPage