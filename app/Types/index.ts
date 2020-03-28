export type Dictionary<T> = Record<string, T>;

export type KeyIdentifier<T> = (obj: T) => string;


export type ItemClickHandler<T> = (item: T, number?: number) => void;