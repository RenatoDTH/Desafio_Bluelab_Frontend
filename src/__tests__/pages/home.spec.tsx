import React from 'react';
import { fireEvent, render, waitFor, screen } from '@testing-library/react';
import AxiosMock from 'axios-mock-adapter';
import { BrowserRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import api from '../../services/api';
import { Home } from '../../pages';

const apiMock = new AxiosMock(api);

describe('Home', () => {
  it('should render static componenets', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );
    expect(screen.getByTestId('header')).toBeTruthy();
    expect(screen.getByTestId('topContent')).toBeTruthy();
    expect(screen.getByTestId('loading')).toBeTruthy();
  });

  it('should be able to list all users from the api', async () => {
    apiMock.onGet('users').reply(200, [
      {
        id: '1',
        firstname: 'any_name',
        lastname: 'any_lastname',
        phone: '1130222530',
        cpf: '25014966047',
        updated_at: '2021-05-17T21:08:02.000Z',
        created_at: '2021-05-17T20:01:25.000Z',
      },
      {
        id: '2',
        firstname: 'any_name2',
        lastname: 'any_lastname2',
        phone: '11910345292',
        cpf: '18406097027',
        updated_at: '2021-05-17T21:08:35.000Z',
        created_at: '2021-05-17T21:08:35.000Z',
      },
    ]);

    const { getByText } = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );

    await waitFor(
      () => expect(getByText('any_name any_lastname')).toBeTruthy(),
      {
        timeout: 2501,
      },
    );
    expect(getByText('Telefone: (11) 30222-530'));
    expect(getByText('CPF: 184.060.970-27'));
  });

  it('should be able to find a user by cpf', async () => {
    apiMock.onGet('users').reply(200, [
      {
        id: '1',
        firstname: 'any_name',
        lastname: 'any_lastname',
        phone: '1130222530',
        cpf: '25014966047',
        updated_at: '2021-05-17T21:08:02.000Z',
        created_at: '2021-05-17T20:01:25.000Z',
      },
      {
        id: '2',
        firstname: 'any_name2',
        lastname: 'any_lastname2',
        phone: '11910345292',
        cpf: '18406097027',
        updated_at: '2021-05-17T21:08:35.000Z',
        created_at: '2021-05-17T21:08:35.000Z',
      },
    ]);

    const { getByText, getByTestId } = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );

    await waitFor(
      () => expect(getByText('any_name any_lastname')).toBeTruthy(),
      {
        timeout: 2501,
      },
    );

    const searchInput = getByTestId('searchInput') as HTMLInputElement;

    await act(async () => {
      fireEvent.change(searchInput, {
        target: { value: '18406097027' },
      });
    });

    expect(searchInput.value).toBe('18406097027');

    await waitFor(
      () =>
        act(async () => {
          fireEvent.click(getByTestId('searchButton'));
        }),
      {
        timeout: 2550,
      },
    );
    expect(screen.getByText('any_name2 any_lastname2')).toBeTruthy();
  });

  it('should go to userCreation page', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );

    fireEvent.click(screen.getByTestId('userCreationButton'));
    expect(global.window.location.pathname).toEqual('/usercreation');
  });
});
