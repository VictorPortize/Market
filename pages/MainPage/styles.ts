import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

const { height, width } = Dimensions.get(`window`)

export const ScreenSize = height

export const halfScreenSize = height * 0.5

export const Container = styled.View`
    flex : 1;
`;