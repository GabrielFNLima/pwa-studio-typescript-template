import { ComponentType } from 'react';

type Classes = { [key: string]: string };

type MergeClasses = <T = Classes>(...classes: (T)[]) => T;

declare const mergeClasses: MergeClasses;
declare function useStyle<T = Styles>(
    defaultClasses: T,
    propClasses?: T
): T;

interface ClassifyProps {
    className?: string;
    classes?: Classes;
    [key: string]: any;
}

declare function classify<T extends ComponentType<any>>(
    defaultClasses: Classes
): (
    WrappedComponent: T
) => ComponentType<ClassifyProps & Omit<React.ComponentProps<T>, 'classes'>>;

// Define a generic type `Styles` to represent your style objects
type Styles = { [key: string]: string };

// Update the `useStyle` declaration to accept `Styles` as the generic type


export { mergeClasses, useStyle };
export default classify;
