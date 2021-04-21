import React from 'react'
import Card from '@material-ui/core/Card'
import { Button, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core'

import { Container } from './styles'
import  Salgados  from '../../image/salgados-min.png'


const useStyles = makeStyles({
    root: {
      maxWidth: 380,
    },
  });

const styles = {
    media:{
        height: '50%',
        paddingTop: '0%', // 16:9,
        marginTop:'0'
    }
};


const CardProduct: React.FC = () => {

    const classes = useStyles();
    return(

        <Container>

        <div>
        <Card>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Combo de Salgados"
                    //height='104'
                    src={Salgados}
                    title="Combo de Salgados"
                    style={styles.media}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Combo de Salgados
                    </Typography>
                    <Typography variant="h6" color="textSecondary" component="h6">
                        Contém 25 salgados com os seguintes sabores: coxinha, bolinha de queijo,
                        bolinha de pizza, risole de carne, quibe, enroladinho de salsicha, pastelzinho de
                        carne seca, trouxinha de camarão

                        O combo acompanha um refri de 250 ml
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary">
                        compartilhar
                    </Button>
                    <Button size="small" color="primary">
                        outro botão
                    </Button>
                </CardActions>
            </CardActionArea>
        </Card>
        </div>
        </Container>
    );
}

export default CardProduct;
