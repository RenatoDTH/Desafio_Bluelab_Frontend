import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import AxiosMock from 'axios-mock-adapter';
import { BrowserRouter } from 'react-router-dom';
import api from '../../services/api';
import { UserCreation } from '../../pages';

const apiMock = new AxiosMock(api);

describe('UserCreation', () => {
  it('should render static componenets', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <UserCreation />
      </BrowserRouter>,
    );
    expect(getByTestId('header')).toBeTruthy();
    expect(getByTestId('inputName')).toBeTruthy();
    expect(getByTestId('inputLastName')).toBeTruthy();
    expect(getByTestId('inputPhone')).toBeTruthy();
    expect(getByTestId('inputCpf')).toBeTruthy();
  });

  it('should populate fields correctly', async () => {
    render(
      <BrowserRouter>
        <UserCreation />
      </BrowserRouter>,
    );
    const inputName = screen.getByPlaceholderText(
      'Nome (ex: Renato)',
    ) as HTMLInputElement;
    const inputLastName = screen.getByPlaceholderText(
      'Sobrenome (ex: Castro)',
    ) as HTMLInputElement;
    const inputPhone = screen.getByPlaceholderText(
      'Telefone (ex: 11222223333)',
    ) as HTMLInputElement;
    const inputCpf = screen.getByPlaceholderText(
      'CPF (ex: 11122233344)',
    ) as HTMLInputElement;

    fireEvent.change(inputName, {
      target: { value: 'any_name' },
    });
    fireEvent.change(inputLastName, { target: { value: 'any_lastname' } });
    fireEvent.change(inputPhone, { target: { value: '1130222530' } });
    fireEvent.change(inputCpf, { target: { value: '25014966047' } });

    expect(inputName.value).toBe('any_name');
    expect(inputLastName.value).toBe('any_lastname');
    expect(inputPhone.value).toBe('1130222530');
    expect(inputCpf.value).toBe('25014966047');
  });

  it('should go to home page', () => {
    render(
      <BrowserRouter>
        <UserCreation />
      </BrowserRouter>,
    );

    fireEvent.click(screen.getByTestId('homeButton'));
    expect(global.window.location.pathname).toEqual('/');
  });
});
