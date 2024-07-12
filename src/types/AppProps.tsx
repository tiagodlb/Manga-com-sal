type AppProps = {
    message: string;
    count: number;
    disabled: boolean;
    /** array of a type! */
    names: string[];
    /** string literals to specify exact string values, with a union type to join them together */
    status: "waiting" | "success";
    /** an object with known properties (but could have more at runtime) */
    obj: {
      id: string;
      title: string;
    };
    /** array of objects! (common) */
    objArr: {
      id: string;
      title: string;
    }[];
    /** any non-primitive value - can't access any properties (NOT COMMON but useful as placeholder) */
    obj2: object;
    /** an interface with no required properties - (NOT COMMON, except for things like `React.Component<{}, State>`) */
    obj3: {};
    /** a dict object with any number of properties of the same type */
    onClick: () => void;
    setState: React.Dispatch<React.SetStateAction<number>>;
};