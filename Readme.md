1) What are some differences between interfaces and types in TypeScript?

Both are used to describe the shape of data, like what properties an object should have. Interfaces are usually used for objects and work great with classes. Types are more flexible and you can use them for objects, but also for combining things. They’re very similar, but type is a bit more powerful. I usually use interface for simple stuff, and type when things get more complex.

2) What is keyof?
The keyof keyword just means "give me the property names of a type."

Example:
type Person = {
  name: string;
  age: number;
};
type PersonKeys = keyof Person;

Now, PersonKeys is a type that can only be "name" or "age"