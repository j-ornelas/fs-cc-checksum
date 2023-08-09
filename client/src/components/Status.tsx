import styled from 'styled-components';

interface StatusProps {
  success: boolean | null;
  statusText: string;
}
export function Status({ success, statusText }: StatusProps) {
  if (success === null) return null;

  return <StatusText success={success}>{statusText}</StatusText>;
}

interface StatusTextProps {
  success: boolean;
}
const StatusText = styled.div<StatusTextProps>`
  color: ${(p) => (p.success ? 'green' : 'red')};
`;
