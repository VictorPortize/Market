import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

const { height, width } = Dimensions.get(`window`)

export const Container = styled.View`
    height : ${ height * 0.35 }px;
    background-color : yellow;
`;