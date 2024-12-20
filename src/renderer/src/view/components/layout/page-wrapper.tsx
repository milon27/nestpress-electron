interface IPageWrapper {
    children: React.ReactNode
}

export default function PageWrapper({ children }: IPageWrapper) {
    return <div>{children}</div>
}
