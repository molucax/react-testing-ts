interface Item {
  name: string;
  href: string;
}
interface Props {
  items: Item[]
}

export const SideBar = ({ items }: Props ) => (
  <div>
    {
      items.map(item => (
        <div key={item.href}>
          <a role="navigation" href={item.href}>
            {item.name}
          </a>
        </div>
      ))
    }
  </div>
)