import Link from 'next/link'

function logoSocial({ data }) {
    return (
        <li>
            <Link href={data.href} target="_blank">
                <a> {data.typeNameIcon} </a>
            </Link>
        </li>
        
    )
}

export default logoSocial
