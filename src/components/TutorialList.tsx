import MarkdownIt from 'markdown-it'

const md = new MarkdownIt({
  breaks: true,
  html: false,
})

type ListProps = {
  items: string[];
  type: 'disc' | 'list-disc' | 'list-decimal';
}

const TutorialList = ({ items, type }: ListProps) => {
  const listStyle = type === 'disc' ? 'list-disc' : 'list-decimal';

  return (
    <ul className={`${listStyle} list-inside ml-4 space-y-2 text-base text-gray-300`}>
      {items.map((item, index) => {
        const html = md.renderInline(item); // inline parsing, avoids <p> tags
        return (
          <li
            key={index}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        )
      })}
    </ul>
  )
}

export default TutorialList
