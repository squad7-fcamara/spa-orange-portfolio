import styled from 'styled-components';

export const ContainerLoading = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const LoadingMessage = styled.span`
    width: 40px;
    height: 40px;
    --c:no-repeat linear-gradient(#FF5522 0 0);
    background: var(--c),var(--c),var(--c),var(--c);
    background-size: 21px 21px;
    animation: l5 1.5s infinite cubic-bezier(0.3,1,0,1);

    @keyframes l5 {
        0%   {background-position: 0    0,100% 0   ,100% 100%,0 100%}
        33%  {background-position: 0    0,100% 0   ,100% 100%,0 100%;width:60px;height: 60px}
        66%  {background-position: 100% 0,100% 100%,0    100%,0 0   ;width:60px;height: 60px}
        100% {background-position: 100% 0,100% 100%,0    100%,0 0   }
     }
`
