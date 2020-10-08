import { db } from '../../../API/firebase';

export const addProduct = async (post) => {
	var docId;
	await db.collection('posts').add(post).then((doc) => {
		docId = doc.id;
	});

	return docId;
};
