import React, {  } from 'react'
import { Container  } from './styles'
import { Animated } from 'react-native'

interface Props {
    translateY : Animated.Value
    visible : boolean
    dismissModal : () => void
    handleResetModal : () => void
    handleCloseModal : () => void
}

const BottomSheetItems : React.FC<Props> = ({ translateY, visible, dismissModal, handleCloseModal, handleResetModal }) => {


    return (
        <Container>
            
        </Container>
    )
}

export default BottomSheetItems