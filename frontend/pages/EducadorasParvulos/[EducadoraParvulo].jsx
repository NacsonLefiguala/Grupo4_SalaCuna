import React from 'react'
import { getEducadoraParvulo } from '../../data/EducadoraParvulos'

export const getServerStaticProps = async (context) => {
    const response = getEducadoraParvulo(context.query).then(res => {

    })
    return {
        props: {
            EducadoraParvulo: response
        }
    }
}

const editar = ({ EducadoraParvulo }) => {
    console.log(EducadoraParvulo)
    return (
        <div>{EducadoraParvulo}</div>
    )
}

export default editar