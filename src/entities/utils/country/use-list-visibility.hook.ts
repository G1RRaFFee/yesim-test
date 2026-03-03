'use client';

import { useMemo, useState } from 'react';

interface UseListVisibilityProps<T> {
  items: T[];
  initialLimit?: number | 'all';
}

export function useListVisibility<T>({ items, initialLimit = 12 }: UseListVisibilityProps<T>) {
  const [showAll, setShowAll] = useState(false);

  const shouldShowAll = initialLimit === 'all' || showAll;

  const displayedItems = useMemo(() => {
    if (shouldShowAll) {
      return items;
    }
    return items.slice(0, initialLimit as number);
  }, [items, shouldShowAll, initialLimit]);

  const hasMoreItems =
    initialLimit !== 'all' && !showAll && items.length > (initialLimit as number);

  const hiddenCount = hasMoreItems ? items.length - (initialLimit as number) : 0;

  return {
    displayedItems,
    showAll: shouldShowAll,
    hasMoreItems,
    hiddenCount,
    handleShowAll: () => setShowAll(true),
    handleShowLess: () => setShowAll(false),
  };
}
