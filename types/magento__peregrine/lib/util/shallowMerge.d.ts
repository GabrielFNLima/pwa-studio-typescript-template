type UnionToIntersection<U> = (U extends any
    ? (k: U) => void
    : never) extends ((k: infer I) => void)
    ? I
    : never;

type ShallowMerge = <T extends any[]>(...args: T) => UnionToIntersection<T[number]>;

declare const shallowMerge: ShallowMerge;

export default shallowMerge;
