type Props = {
    message: string;
    children: any;
};
const Card: React.FC<Props> = ({ message, children }) => (
    <div className='card'>
        <div>{children}</div>
        <p style={{ marginTop: '1em' }}>{message}</p>
    </div>
);

export default Card;
