import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './ButtonPaginationPosts';

describe('<ButtonPaginationPosts />', () => {
  it('should render the button with the text "Load More Posts"', () => { //teste para saber se o botão tem texto passado.
    const fn = jest.fn();
    render(<Button text="Load More Posts" disabled={false} onClick={fn} />); //aqui passa o component a ser testado.

    expect.assertions(1); //aqui se espera que ocorra uma sessão.

    const button = screen.getByRole('button', { name: /Load More Posts/i });
    expect(button).toBeInTheDocument(); // aqui vai chegar se ha realmente esse texto no botão.
  });

  it('should call function on button click', () => { //teste para saber se o botão foi clicado como oq se espera.
    const fn = jest.fn(); // aqui é criado uma função de jest.Mock().
    render(<Button text="Load more" disabled={false} onClick={fn} />);

    const button = screen.getByRole('button', { name: /Load More Posts/i });

    userEvent.click(button); //aqui vai fazer dar 1 click no botão.

    expect(fn).toHaveBeenCalledTimes(1); // aqui valida se a função foi clicada uma vez ou mais vezes.
  });

  it('should be disabled when disabled is true', () => { //teste para saber se o botão foi desativado ou não.
    const fn = jest.fn();
    render(<Button text="Load more" disabled={true} onClick={fn} />);
    const button = screen.getByRole('button', { name: /Load More Posts/i });
    expect(button).toBeDisabled(); //espera que o Botão esteje desativado.
  });

  it('should be enabled when disabled is false', () => { //teste para saber se o botão foi desativado ou não.
    const fn = jest.fn();
    render(<Button text="Load more" disabled={false} onClick={fn} />);
    const button = screen.getByRole('button', { name: /Load More Posts/i });
    expect(button).toBeEnabled(); //espera que o Botão esteje ativado.
  });

  it('should match snapshot', () => {
    const fn = jest.fn();
    const { container } = render(<Button text="Load more" disabled={false} onClick={fn} />);
    // expect(container.firstChild).toMatchSnapshot();
  });
});
