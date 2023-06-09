import {Information} from '../container/Container';
import ImageContainer from '../image-container/ImageContainer';
import InfoHeader from '../info-header/InfoHeader';

interface PresentationProps {
	images: Information[];
	loadImagesClick: any;
	newImagesSectionRef: any;
}

const PresentationImage = ({images, loadImagesClick, newImagesSectionRef}: PresentationProps) => {
	return (
		<main>
			<InfoHeader />

			<div className="grid grid-cols-5 justify-items-center mt-4 order-last md:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 h-2/3">
				{images.map((imag, index) => (
					<ImageContainer key={index} srcInfo={imag.urls.small} altInfo="" />
				))}
			</div>

			<div className=" w-full px-auto b bg-slate-500 flex  justify-center  fixed bottom-0">
				<button
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 m-4 rounded-full"
					onClick={loadImagesClick}
				>
					{' '}
					Add more images{' '}
				</button>{' '}
			</div>
			<div ref={newImagesSectionRef}></div>
		</main>
	);
};

export default PresentationImage;
