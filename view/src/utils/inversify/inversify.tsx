import React, { useContext, ComponentType } from 'react';
import { Container, interfaces } from 'inversify';

const useContainerFromContext = (): interfaces.Container => {
  const container = useContext(InversifyContext);

  if (!container) { throw new Error('Provide InversifyContext is required!'); }

  return container;
}

function checkAlreadyRegistered<T>(
    container: interfaces.Container,
    identifier: interfaces.ServiceIdentifier<T>
): boolean {
  // @ts-ignore library haven't api for check already registered dependency only current container
  return container._bindingDictionary._map.get(identifier);
}

export const InversifyContext = React.createContext<interfaces.Container | null>(null);

export const withInversifyProvider = (
    Component: ComponentType,
    scope?: interfaces.BindingScope,
): React.FC => {
  return (): JSX.Element => {
    const container = new Container({ defaultScope: scope ?? 'Singleton' });
    const parentContainer = useContext(InversifyContext);

    if (parentContainer) container.parent = parentContainer;

    return (
      <InversifyContext.Provider value={container}>
        <Component />
      </InversifyContext.Provider>
    );
  };
}

export function useRegistration<T>(
    identifier: interfaces.ServiceIdentifier<T>,
    constructor: new (...args: any[]) => T
): void {
  const container = useContainerFromContext();

  if (!checkAlreadyRegistered<T>(container, identifier)) {
    container.bind<T>(identifier).to(constructor);
  }
}

export function useRegistrationConst<T>(identifier: interfaces.ServiceIdentifier<T>, value: T): void {
  const container = useContainerFromContext();

  if (!checkAlreadyRegistered<T>(container, identifier)) {
    container.bind<T>(identifier).toConstantValue(value);
  }
}

export function useInjection<T>(identifier: interfaces.ServiceIdentifier<T>): T {
  const container = useContainerFromContext();

  return container.get<T>(identifier);
}
