interface TitleProps {
  title: string;
  className?: string;
}

export function Title({ title, className }: TitleProps) {
  return (
    <div className="p-2">
      <h1
        className={
          className ? `${className}` : "text-3xl font-bold text-gray-800 dark:text-gray-200"
        }
      >
        {title}
      </h1>
    </div>
  );
}
