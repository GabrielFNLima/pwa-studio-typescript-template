type ShallowMerge = <T extends object[]>(...args: T) => UnionToIntersection<T[number]>;

declare const shallowMerge: ShallowMerge;

export default shallowMerge;

type UnionToIntersection<U> = (U extends any? (k: U) => void: never) extends ((k: infer I) => void)? I: never;
