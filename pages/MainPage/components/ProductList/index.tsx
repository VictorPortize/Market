import React, { useState, useEffect } from 'react'

import { Container, ContainerTitle, Title, ItensContainer, iconSize } from './styles'
import Icon from 'react-native-vector-icons/MaterialIcons'

const ProductList : React.FC = () => {

    const [ height , setHeight ] = useState(0)
    const [ data , setData ] = useState([])

    function AddItem(){
        setTimeout(() => {
            let dados = data
            setData([ ...dados, {} ])
        },5000)
    }

    function onLayout( e ){
        console.log(e.nativeEvent.layout.height)
        // AddItem()
        setHeight(height)
    }

    return (
        <Container  onLayout={onLayout}  >
            <ContainerTitle>
                <Title>Itens na lista: </Title>
                <Icon name='add-shopping-cart' size={iconSize} color='black' />
            </ContainerTitle>
            <ItensContainer>
                {
                    data.map( ( item, key ) => {
                        return <Title key={ key } >Item:</Title>
                    })
                }
            </ItensContainer>
        </Container>
    )
}

export default ProductList