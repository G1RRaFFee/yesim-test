import { type ReactNode } from 'react';

interface ListProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  getItemKey: (item: T, index: number) => string | number;
  showFooter?: boolean;
  footerContent?: ReactNode;
  isLoading?: boolean;
  loadingComponent?: ReactNode;
  emptyComponent?: ReactNode;
  className?: string;
  gridColumns?: number;
}

export const List = <T,>({
  items,
  renderItem,
  getItemKey,
  showFooter = false,
  footerContent,
  isLoading = false,
  loadingComponent,
  emptyComponent,
  className = '',
}: ListProps<T>) => {
  const defaultLoadingComponent = (
    <div>
      <div />
      <span>Загрузка...</span>
    </div>
  );

  const defaultEmptyComponent = (
    <div>
      <p>Список пуст</p>
    </div>
  );

  if (isLoading) {
    return <>{loadingComponent || defaultLoadingComponent}</>;
  }

  if (!items.length) {
    return <>{emptyComponent || defaultEmptyComponent}</>;
  }

  return (
    <div>
      <ul className={className}>
        {items.map((item, index) => (
          <li key={getItemKey(item, index)}>{renderItem(item, index)}</li>
        ))}
      </ul>

      {showFooter && footerContent && footerContent}
    </div>
  );
};
