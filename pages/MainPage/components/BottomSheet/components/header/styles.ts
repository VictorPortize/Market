import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

const { height, width } = Dimensions.get(`window`)

export const Container = styled.View`
    height : ${ height * 0.1 }px;
    justify-content : center;
    align-items : center;
`;

export const Title = styled.Text`
    font-size : ${ height * 0.025 }px;
    color : red;
`;