
type Props = {
  message: string
}
const ErrorMessage = ({ message }: Props) => (
    <div className="flex items-center text-rose-500">
        { message }
    </div>
)

export default ErrorMessage