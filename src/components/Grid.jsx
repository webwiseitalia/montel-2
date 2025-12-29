export default function Grid({
  children,
  cols = 2,
  gap = 'gap-8',
  className = ''
}) {
  const colsClass = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  }

  return (
    <div className={`grid ${colsClass[cols]} ${gap} ${className}`}>
      {children}
    </div>
  )
}
