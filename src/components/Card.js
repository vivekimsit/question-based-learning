import styled from 'styled-components';

const Card = styled.div`
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14),
      0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-weight: 400;
  min-height: 200px;
  overflow: hidden;
  width: 330px;
  z-index: 1;
  margin: 8px;
  position: relative;
  background: #fff;
  border-radius: 2px;
  box-sizing: border-box;
`;


const CardHeader = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: row;
`;

const CardText = styled.div`
  max-height: 40px;
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const CardTitle = styled.div`
  padding: 24px 16px 16px;
  display: flex;
  flex: 1 1 auto;
  flex-direction: row;
`;

const CardTitleText = styled.div`
  webkit-box-flex: 1;
  flex: 1;
  flex-direction: column;
  display: flex;
`;

const CardImage = styled.img`
  box-sizing: border-box;
  display: flex;
  flex: 0 0 auto;
  width: 100%;
  height: auto;
`;

const CardActions = styled.div`
  box-sizing: border-box;  
  flex-direction: row;
  display: flex;
  align-content: center;
  max-width: 100%;
  justify-content: flex-start;
  margin: 8px;
`;

const CardContent = styled.div`
  display: block;
  padding: 16px;
`;

export {
  Card,
  CardActions,
  CardHeader,
  CardContent,
  CardImage,
  CardText,
  CardTitle,
  CardTitleText
};
