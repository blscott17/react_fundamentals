import { divide } from 'lodash';
import React, { useState } from 'react';

const TenLittleMonkeys = () => {
  return (
    <div className='App'>
      <h1>10 Little Monkey challenges</h1>
      <p>Are You ready?</p>
      <p>
        Create a button that when clicked, you will subtract one monkey from the
        total. If it is zero you should display the following: There is no more
        monkeys jumping on the bed.
      </p>
      <hr />
      <p>
        10 monkeys jumping on the bed, one fell off and bumped his head. Momma
        called the doctor and the doctor said "Mo more monkey's jumping on the
        bed".
      </p>
      <button>Subtract one Monkey </button>
    </div>
  );
};

export default TenLittleMonkeys;
