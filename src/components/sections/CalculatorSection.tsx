import classNames from 'classnames'
const CalculatorSection = ({
  className,
  title,
  children
}: {
  className?: string
  title: string | React.ReactNode
  children: React.ReactNode
}) => {
  return (
    <section>
      <h1 className="mx-4 mb-1 font-bold">{title}</h1>
      <div
        className={classNames('px-4 pt-4 border rounded mb-4 bg-gray-50 drop-shadow-sm', className)}
      >
        {children}
      </div>
    </section>
  )
}
export default CalculatorSection
