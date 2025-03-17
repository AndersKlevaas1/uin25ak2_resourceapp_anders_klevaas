type Props = {
  title: string;
};

export default function PageTitle({ title }: Props) {
  return <h2>{title}</h2>;
}