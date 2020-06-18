import styled from 'styled-components/native'
import { Dimensions, View } from 'react-native'

const { height, width } = Dimensions.get(`window`)

export const iconSize = height * 0.04
export const Container = styled.View`
    flex : 1;
    background-color : white;
`;
export const ContainerTitle = styled.View`

`;
export const Title = styled.Text`
    padding: 20px 30px;
    font-size : 18px;
`;
export const ItensContainer = styled.View`
    background-color : red;
`;