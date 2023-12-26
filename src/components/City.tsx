import * as cityTimezones from 'city-timezones';
import { DateTime } from 'luxon';
import { useState } from 'react';

function City() {
  const [inputValue, setInputValue] = useState<string>('');

  function handleClick() {
    const res = cityTimezones.lookupViaCity(inputValue);
    console.log(res);

    if (res.length > 0) {
      console.log(DateTime.now().setZone(res[0].timezone).toFormat('YYYY-MM-DD HH:mm:ss'));
    }
  }

  return (
    <div>
      city
      <input
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <button onClick={handleClick}>search</button>
    </div>
  );
}

export { City };
