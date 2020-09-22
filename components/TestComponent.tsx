import React, { FC } from 'react';

const TestComponent: FC = () => (
    <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ab unde ullam nostrum veniam porro, perspiciatis, deleniti voluptate laudantium aut earum error neque id architecto dolor labore a reiciendis voluptas.Cum, aut? In sint esse quaerat nulla. Pariatur minima corporis corrupti quia ipsam accusamus perspiciatis possimus voluptatum commodi libero consectetur, itaque velit architecto natus tenetur. Totam ratione nulla sint nostrum.</p>

        <style jsx>
            {`
                @import './styles/_vars.scss';
                p {
                    font-size: 2rem;
                }
                h1 {
                    font-size: 5rem;
                    color: red;
                }
            `}
        </style>
    </div>
);

export default TestComponent;
