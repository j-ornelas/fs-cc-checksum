import { useState } from 'react';
import styled from 'styled-components';

import { Status } from './Status';
import { FlexRow } from './layout';

export function CardChecker() {
  const [cardNum, setCardNum] = useState('');
  const [isValid, setIsValid] = useState<null | boolean>(null);

  async function checkCard(cardNumber: string) {
    const isValidCardNumber = await fetch('card/is-valid', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ cardNumber }),
    }).then((data) => data.json());
    setIsValid(isValidCardNumber);
  }

  function handleClick() {
    checkCard(cardNum);
  }

  function handleInputChange(value: string) {
    setIsValid(null);
    const numsOnly = value.replace(/\D/g, '');
    setCardNum(numsOnly);
  }

  function generateStatusText() {
    switch (isValid) {
      case true:
        return 'Valid card number ✅';
      case false:
        return 'Invalid card number ❌';
      default:
        return '';
    }
  }

  return (
    <div>
      <InputRow>
        <div>
          <input
            onChange={(e) => handleInputChange(e.currentTarget.value)}
            value={cardNum}
          />
          <Status success={isValid} statusText={generateStatusText()} />
        </div>
        <div>
          <button type="button" onClick={handleClick}>
            Submit
          </button>
        </div>
      </InputRow>
    </div>
  );
}

const InputRow = styled(FlexRow)`
  padding: 8px 0;
  gap: 16px;
`;
