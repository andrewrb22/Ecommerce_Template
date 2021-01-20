import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listPaintings, savePaint, deletePaint } from '../actions/paintActions.js';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';

function PaintingsScreen(props) {
    const [modalVisible, setModalVisible] = useState(false);
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [price, setPrice] = useState('');
    const [images, setImage] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [Qty, setQty] = useState('');
    const paintList = useSelector(state => state.paintList);
    const { loading, paintings, error } = paintList;


    const paintSave = useSelector(state => state.paintSave);

    const {
        loading: laodingSave,
        success: successSave,
        error: errorSave,
    } = paintSave;
    const paintDelete = useSelector(state => state.paintDelete);
    const {
        loading: laodingDelete,
        success: successDelete,
        error: errorDelete,
    } = paintDelete;
    const dispatch = useDispatch();


    useEffect(() => {
        if (successSave) {
            setModalVisible(false)
        }
        dispatch(listPaintings());
        return () => {
            //
        };
    }, [successSave, successDelete]);

    const openModal = (paint) => {
        setModalVisible(true);
        setId(paint._id);
        setName(paint.name);
        setPrice(paint.price);
        setImage(paint.images);
        setCategory(paint.category);
        setQty(paint.Qty);
        setDescription(paint.description);

    }




    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(savePaint({
            _id: id,
            name, price, images, category, Qty, description
        }));


    };
    const deleteHandler = (paint) => {
        dispatch(deletePaint(paint._id))
    }

    return (
        <div className="content content-margined">
            <div className="product-header">
                <p className="h2 text-center mb-4"> Products</p>
                <MDBBtn color="primary" type="submit" className="button primary" onClick={() => openModal({})}>
                    Create New Products
        </MDBBtn>
            </div>
            { modalVisible && (
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="12">
                            <form onSubmit={submitHandler}>
                                <p className="h2 text-center mb-4">Create  New Product</p>
                                <p>

                                    {laodingSave && <div> Loading...</div>}
                                    {errorSave && <div> {errorSave}</div>}
                                </p>

                                <div className="black-text">
                                    <MDBInput label="Product Name" icon="user" type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)}
                                        success="right" />
                                    <MDBInput label="Price" icon="dollar-sign" type="text" name="price" id="price" value={price} onChange={(e) => setPrice(e.target.value)}
                                        success="right" />
                                    <MDBInput label="Image" icon="image" type="text" name="images" id="image" value={images} onChange={(e) => setImage(e.target.value)} success="right" />
                                    <MDBInput label="Category" icon="info-circle" type="text" name="category" id="category" value={category} onChange={(e) => setCategory(e.target.value)} />
                                    <MDBInput label="Qty" icon="info-circle" type="text" name="posterQty" id="posterQty" value={Qty} onChange={(e) => setQty(e.target.value)} />
                                    <MDBInput label= "description" icon="info-circle" name="description" id="description" value={description} onChange={(e) => setDescription(e.target.value)}type="text" >
                                    </MDBInput> 
                                </div>
                                <div className="text-center">
                                    <MDBBtn color="primary" type="submit" className="button primary">{id ? "Update" : "Create"}</MDBBtn>
                                    <MDBBtn color="deep-orange" onClick={() => setModalVisible(false)}>Back</MDBBtn>
                                </div>
                            </form>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>





            )}

            <div className="paint-list">

                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paintings.map(paint => (
                            <tr key={paint._id}>
                                <td>{paint._id}</td>
                                <td>{paint.name}</td>
                                <td>{paint.price}</td>
                                <td>{paint.category}</td>
                                <td>
                                <MDBBtn color="primary" onClick={() => openModal(paint)}>Edit</MDBBtn >
                                    {" "}
                                    <MDBBtn color="deep-orange" onClick={() => deleteHandler(paint)} >Delete</MDBBtn>
                                </td>

                            </tr>
                        ))}



                    </tbody>
                </table>
            </div>



        </div>
    )
}
export default PaintingsScreen;