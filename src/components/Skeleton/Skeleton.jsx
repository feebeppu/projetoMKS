import propTypes from "prop-types"
import { Load } from '../../styles/styles'

export default function Skeleton({ width, height, borderRadius }) {
    return (
        <Load style={{ width, height, borderRadius }}></Load>
    )
}

Skeleton.propTypes = {
    data: propTypes.shape({}),
}.isRequired