
type SectionTitleProps = {
    title: string
}

const SectionTitle = ({title}:SectionTitleProps) => {
  return (
    <h2 className="text-2xl font-semibold text-blue-300 mb-2">{ title }</h2>

  )
}

export default SectionTitle
