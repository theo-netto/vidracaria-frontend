import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  img {
    height: 36px;
    margin-top: 25px;
  }
  > div {
    display: flex;
    flex-direction: column;
    :nth-child(1) {
      padding-bottom: 12px;
    }
    h1 {
      color: #222;
      font-size: 16px;
      margin-bottom: 4px;
      text-align: center;
    }
    strong {
      color: #444;
      font-size: 16px;
      margin-bottom: 4px;
    }
    small {
      font-size: 14px;

      color: #666;
      line-height: 25px;
    }
    > div {
      > span {
        font-size: 14px;
        font-weight: bold;
        color: #666;
      }
      :nth-last-child(1) {
        margin-bottom: 10px;
      }
    }
  }
  > div + div {
    padding-top: 9px;
    border-top: 1px solid #eee;
  }
`;
